const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('<!doctype html><html><body><span id="hello">Hello World!</span></body></html>'))

app.get('/test/1', (req, res) => {
  res.cookie('a', `test1-a`, {
    expires: new Date(Date.now() + 900000),
    sameSite: "none",
    httpOnly: true
  });
  res.cookie('b', `test1-b`, {
    expires: new Date(Date.now() + 900000),
    sameSite: "none",
    httpOnly: true
  })
  res.cookie('c', `test1-c`, {
    sameSite: 'none'
  })
  res.send('Set cookies')
})

app.get('/test/2', (req, res) => {
  res.clearCookie('a', { path: '/' })
  res.clearCookie('c', { path: '/' })
  res.cookie('a', `test2-a`, {
    expires: new Date(Date.now() + 900000),
    sameSite: "none",
    httpOnly: true
  });
  res.cookie('b', `test2-b`, {
    expires: new Date(Date.now() + 900000),
    sameSite: "none",
    httpOnly: true
  })
  res.cookie('c', `test2-c`, {
    sameSite: 'none'
  })
  res.send('Set cookies')
})

app.get('/test/3', (req, res) => {
  res.cookie('a', `test3-a`, {
    expires: new Date(Date.now() + 900000),
    sameSite: "none",
    httpOnly: true
  });
  res.cookie('b', `test3-b`, {
    expires: new Date(Date.now() + 900000),
    sameSite: "none",
    httpOnly: true
  })
  res.cookie('c', `test3-c`, {
    sameSite: 'none'
  })
  res.send('Set cookies')
})

app.listen(port, () => console.log(`Listening on port ${port}!`))