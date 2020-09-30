const express = require('express');
const router = express.Router();
const pool = require('../DB/connection');

// Obtener post
router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM posts');
    
    let posts = rows;

    res.json({
      posts
    });

  } catch (error) {    
    return res.status(500).json({
      message: 'An error occurred while trying to connect to the server.',
      error
    });

  };
});

// Agregar post
router.post('/', async (req, res) => {
  try {
    const text = `INSERT INTO posts(id, name, description) VALUES(DEFAULT, $1, $2)`;
    const values = [req.body.name, req.body.description];

    await pool.query(text, values);

    const { rows } = await pool.query(`
    SELECT * FROM posts
    order by id desc 
    limit 1`);

    const post = rows;

    res.json({
      status: 'added address.',
      post      
    });    

  } catch (error) {
    return res.status(400).json({
      message: 'An error has occurred in the request to the server.',
      error
    });

  };
});

// Borrar post
router.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const { rows } = await pool.query(`
    SELECT * FROM posts
    WHERE id = ${id}`);

    const post = rows[0];

    const text = `DELETE FROM posts WHERE id = ${id}`;
    await pool.query(text);

    res.json({
      status: 'post deleted.',
      post
    });
  } catch (error) {
    return res.status(400).json({
      message: 'An error has occurred in the request to the server.',
      error
    });
  };
});

module.exports = router