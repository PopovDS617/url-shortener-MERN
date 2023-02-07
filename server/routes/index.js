"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shortUrl_1 = require("../controllers/shortUrl");
const express_1 = require("express");
const validateSchema_1 = __importDefault(require("../middleware/validateSchema"));
const destinationSchema_1 = __importDefault(require("../schemas/destinationSchema"));
const router = (0, express_1.Router)();
router.post('/url/', (0, validateSchema_1.default)(destinationSchema_1.default), shortUrl_1.createShortUrl);
router.get('/:shortId', shortUrl_1.redirectHandler);
exports.default = router;
