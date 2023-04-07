const mdLinks = require('../src/api.js');

describe('validatePathFile', () => {
  it('debería retornar true si la ruta existe', () => {
      const response = mdLinks.validatePathFile('./README.md');

      expect(response).toBe(true);
  });

  it('debería retornar false si la ruta no existe', () => {
    const response = mdLinks.validatePathFile('./no_existe_este_archivo.md');

    expect(response).toBe(false);
  });

});

describe('absolute', () => {
  it('should return false if path is relative', () => {
    const response = mdLinks.absolute('./README.md');
    
    expect(response).toBe(false);
  });

  it('should return true if path is absolute', () => {
    const response = mdLinks.absolute('/README.md');
    
    expect(response).toBe(true);
  });

});

describe('md extention', () => {
  it('should return true if the extention is .md', () => {
    const response = mdLinks.mdExtention('/README.md');
    
    expect(response).toBe(true);
  });

  it('should return false if the extention is not .md', () => {
    const response = mdLinks.mdExtention('/README.txt');
    
    expect(response).toBe(false);
  });
});

describe('open file', () => {
  it('should return file when file is opened', () => {
    const response = mdLinks.openFile('./README.md');
    
    expect(response).toBeDefined();
  });

  it('should throws an error when the file not exists', () => {
    expect(() => mdLinks.openFile('./no_existe_este_archivo.txt')).toThrow();
  });

});

describe('getLinks', () => {
  it('should return links', () => {
    const response = mdLinks.getLinks('./README.md');
    
    expect(response[0]).toBe('[Markdown](https://es.wikipedia.org/wiki/Markdown)');
  });

  it('should return undefined if file does not have any links', () => {
    const response = mdLinks.getLinks('./thumb.png');
    
    expect(response).not.toBeDefined();
  });
});

describe('getLinksResponseObject', () => {
  it('should return getLinksResponseObject', () => {
    const response = mdLinks.getLinksResponseObject('./README.md');
    
    expect(response[0]).toEqual({"file": "./README.md", "href": "https://es.wikipedia.org/wiki/Markdown", "text": "Markdown"});
  });
});