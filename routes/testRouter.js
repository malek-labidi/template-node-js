import express from 'express';
import { body } from 'express-validator';
import multer from '../middlewares/multer-config.js';
import { addOnce, updateOnce, getAll, getOneById, deleteOnce } from '../controllers/testController.js';

const router = express.Router();

// Handling routes for the '/tests' endpoint
router.route('/')
    // Handling GET requests to retrieve all tests
    .get(getAll)
    // Handling POST requests to add a new test
    .post(
        // Applying multer middleware for handling file uploads
        multer,
        // Validation for the 'name' and 'image' fields in the request body
        [
            body('name').notEmpty().withMessage('Name is required'),
        ], addOnce);


// Handling routes for the '/tests/:id' endpoint
router.route('/:id')
    // Handling GET requests to retrieve a test by ID
    .get(getOneById)
    // Handling PUT requests to update a test by ID
    .put( // Applying multer middleware for handling file uploads
        multer,
        // Validation for the 'name' and 'image' fields in the request body
        [
            body('name').notEmpty().withMessage('Name is required'),
        ], updateOnce)
    // Handling DELETE requests to delete a test by ID
    .delete(deleteOnce);

// Exporting the router for use in other modules
export default router;
