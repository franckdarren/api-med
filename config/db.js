import mysql from 'mysql2';


// export const dbConfig = {
//   host: process.env.DB_HOST || 'localhost',
//   user: process.env.DB_USER || 'root',
//   password: process.env.DB_PASSWORD || '3306',
//   database: process.env.DB_DATABASE || 'medconnect'
// };

export const dbConnect = () => {
  // Créer la connexion MySQL
  const db = mysql.createConnection({
    host: 'localhost',
    user: 'nills',
    password: 'jeune355895',
    database: 'test',
    connectTimeout: 10000,
  });

  // Fonction pour se reconnecter en cas d'échec
  function reconnectDatabase() {
    db.connect((err) => {
      if (err) {
        console.error('Erreur de connexion MySQL: ' + err.stack);
        setTimeout(reconnectDatabase, 5000); // Nouvelle tentative dans 5 secondes
      } else {
        console.log('Connecté à MySQL avec ID ' + db.threadId);
      }
    });
  }

  // Initialiser la connexion
  reconnectDatabase();

  // Retourner l'objet de connexion pour l'utiliser ailleurs
  return db;
};



