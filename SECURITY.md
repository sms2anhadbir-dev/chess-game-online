# Security Policy

## Important Notes

This project is a browser-based chess game.

## Security Model

- Game logic is NOT trusted on the client
- Server only relays moves
- No private data is stored

## Real Security Measures

- Input validation is enforced on server
- Rate limiting prevents spam attacks
- Socket connections are isolated per session

## Known Limitations

### Browser DevTools
It is NOT possible to securely block or disable:
- DevTools (F12)
- Console access
- Source inspection

Any attempt to do so:
- is bypassable
- is not considered security
- may break browser functionality

## Anti-Cheat Design

Instead of blocking users, we rely on:
- Server-side move validation (future upgrade possible)
- Stateless game relay
- No sensitive client secrets

## Reporting Issues

Report vulnerabilities via GitHub Issues.
