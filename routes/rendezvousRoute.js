import express from 'express';
import { RendezvousController } from '../controllers/rendezvousController.js';

export const RendezvousRouter = express.Router();

// Route pour obtenir tous les rendezvous
RendezvousRouter.get('/rendezvous', RendezvousController.getAllRendezvous);

// // Route pour obtenir un rendezvous par ID
// rendezvous.get('/rendezvous/:id', rendezvousController.getRendezvousById);

// // Route pour créer un rendezvous
// rendezvous.post('/rendezvous', rendezvousController.createRendezvous);

// // Route pour mettre à jour un rendezvous
// rendezvous.put('/rendezvous/:id', rendezvousController.updateRendezvous);

// // Route pour supprimer un rendezvous
// rendezvous.delete('/rendezvous/:id', rendezvousController.deleteRendezvous);
