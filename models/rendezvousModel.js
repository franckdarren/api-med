import mysql from 'mysql2/promise';
import { dbConnect } from '../config/db.js';

const db = dbConnect();

export const RendezvousModel = {
  // create: async (date, heure, patientId, medecinId) => {
  //   const query = 'INSERT INTO rendezvous (date, heure, patientId, medecinId) VALUES (?, ?, ?, ?)';
  //   const values = [date, heure, patientId, medecinId];
  //   try {
  //     const [results] = await db.promise().query(query, values);
  //     return results;
  //   } catch (error) {
  //     console.error('Error creating rendezvous:', error.message);
  //     throw error;
  //   }
  // },

  getAllRendezvous: (callback) => {
    db.query('SELECT * FROM rendezvous', (err, results) => {
      if (err) {
        console.error("Erreur lors de l'exécution de la requête: " + err.stack);
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },


  // getById: async (id) => {
  //   const query = 'SELECT * FROM rendezvous WHERE id = ?';
  //   try {
  //     const [results] = await db.promise().query(query, [id]);
  //     return results[0];
  //   } catch (error) {
  //     console.error('Error fetching rendezvous by ID:', error.message);
  //     throw error;
  //   }
  // },

  // update: async (id, date, heure, patientId, medecinId) => {
  //   const query = 'UPDATE rendezvous SET date = ?, heure = ?, patientId = ?, medecinId = ? WHERE id = ?';
  //   const values = [date, heure, patientId, medecinId, id];
  //   try {
  //     const [results] = await db.promise().query(query, values);
  //     return results;
  //   } catch (error) {
  //     console.error('Error updating rendezvous:', error.message);
  //     throw error;
  //   }
  // },

  // delete: async (id) => {
  //   const query = 'DELETE FROM rendezvous WHERE id = ?';
  //   try {
  //     const [results] = await db.promise().query(query, [id]);
  //     return results;
  //   } catch (error) {
  //     console.error('Error deleting rendezvous:', error.message);
  //     throw error;
  //   }
  // }
};

export default RendezvousModel;
