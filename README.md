# dev-toolkit-utils

A collection of reusable JavaScript/Node.js utility functions and helper modules for everyday development tasks.

## Features

- **String Utilities** - Formatting, sanitization, template helpers
- **Array Helpers** - Sorting, filtering, chunking, deduplication
- **Async Utilities** - Retry logic, debounce, throttle, rate limiting
- **File Helpers** - Path resolution, read/write wrappers, streaming
- **Validation** - Input sanitization, schema validation, type checking
- **HTTP Utilities** - Request helpers, pagination, error handling
- **Caching** - In-memory LRU cache, TTL-based expiration
- **Logging** - Structured logging, log levels, formatters

## Installation

```bash
npm install
```

## Usage

```javascript
const { debounce, retry, chunk } = require('./utils');

// Debounce a function
const debouncedSave = debounce(saveData, 300);

// Retry with exponential backoff
const result = await retry(() => fetchAPI('/data'), { retries: 3 });

// Chunk an array
const batches = chunk(items, 10);
```

## Contributing

1. Fork the repo
2. Create a feature branch
3. Submit a PR with tests

## License

MIT
