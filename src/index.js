import express from 'express';
import dotenv from 'dotenv';
import router from './route/admin.route.js'
import employeeRouter from './route/employee.route.js'
dotenv.config();
const app = express();

app.use(express.json());

// Admin routes
app.use('/api/admin', router);

// Employee routes
app.use('/api/employee', employeeRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })

// app.get('/munna', (req, res) => {
//     res.send('Hello Munna!')
//   })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })