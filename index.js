const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const NumericalRoute = require('./Routes/NumericalRoute');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const swaggerUiDist = require('swagger-ui-dist');
const { execSync } = require('child_process');

const app = express();
async function applyMigration() {
  try {
    console.log('🔄 Checking and applying migrations...');

    execSync('npx prisma migrate deploy', { stdio: 'inherit' });
    console.log('✅ Database schema synced successfully');
  } catch (error) {
    console.error('❌ Error syncing database schema:', error);
  }
}


applyMigration();

app.use(express.json());
app.use(cors({ origin: 'https://numerical-method-project.vercel.app', credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Serve Swagger UI files manually
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/swagger-ui', express.static(swaggerUiDist.getAbsoluteFSPath()));


app.use('/api', NumericalRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
