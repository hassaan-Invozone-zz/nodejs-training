const router = require('express').Router();
const controller = require('../controllers/user.controller');
const invoiceController = require('../controllers/invoices.controller');
const menuController = require('../controllers/menu.controller');
const authorization = require('../middleware/authorization');

// REGISTER ROUTE
router.post('/register', controller.user_register);

// LOGIN ROUTE
router.post('/login', controller.user_login);

// USER TOKEN ROUTE
router.get('/verify-token', authorization, controller.user_token_verify);

// UPLOAD INVOICE
router.post('/invoice/create', authorization, invoiceController.upload_invoice);

// CHANGE INVOICE STATUS
router.post('/invoice/status', authorization, invoiceController.change_invoice_status);

// GET ALL INVOICES
router.get('/invoices', authorization, invoiceController.get_all_invoices);

// GET USER INVOICES
router.get('/user-invoices', authorization, invoiceController.get_user_invoices);

// CREATE MENU
router.post('/menu/create', authorization, menuController.create_menu);

// GET MENUS
router.get('/menus', authorization, menuController.get_menu);

// CANCEL MEAL
router.get('/menu/cancel', authorization, menuController.cancel_menu);
module.exports = router;
