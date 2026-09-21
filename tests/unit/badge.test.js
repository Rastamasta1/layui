const fs = require('node:fs');
const path = require('node:path');

describe('badge.css size variants', () => {
  const cssPath = path.join(__dirname, '..', '..', 'src', 'css', 'modules', 'badge.css');
  const css = fs.readFileSync(cssPath, 'utf8');

  test('.lay-badge-md rule declares height: 22px and font-size: 14px', () => {
    const match = css.match(/\.lay-badge-md\s*\{([^}]*)\}/);
    expect(match).not.toBeNull();
    const body = match[1];
    expect(body).toMatch(/height:\s*22px/);
    expect(body).toMatch(/font-size:\s*14px/);
  });

  test('.lay-badge-lg rule declares height: 26px and font-size: 16px', () => {
    const match = css.match(/\.lay-badge-lg\s*\{([^}]*)\}/);
    expect(match).not.toBeNull();
    const body = match[1];
    expect(body).toMatch(/height:\s*26px/);
    expect(body).toMatch(/font-size:\s*16px/);
  });

  test('default .lay-badge rule still declares height: 18px', () => {
    const match = css.match(/\.lay-badge\s*\{([^}]*)\}/);
    expect(match).not.toBeNull();
    const body = match[1];
    expect(body).toMatch(/height:\s*18px/);
  });
});
