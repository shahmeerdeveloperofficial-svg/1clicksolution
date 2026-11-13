// Static prerender: injects the server-rendered homepage into dist/index.html
// so search engines and slow connections get real HTML before JavaScript runs.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = path.resolve(import.meta.dirname, '..')
const template = fs.readFileSync(path.join(root, 'dist/index.html'), 'utf-8')
const entry = pathToFileURL(path.join(root, 'dist-server/entry-server.js')).href
const { render } = await import(entry)

const html = template.replace('<!--app-html-->', render())
fs.writeFileSync(path.join(root, 'dist/index.html'), html)
fs.rmSync(path.join(root, 'dist-server'), { recursive: true, force: true })
console.log('Prerendered dist/index.html')
