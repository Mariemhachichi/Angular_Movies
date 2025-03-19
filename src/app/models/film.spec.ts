import { Film } from './film';

describe('Film', () => {
  it('should create an instance', () => {
    // On passe les valeurs dans le bon ordre, sans utiliser '='
    expect(new Film(1, "film", "flm", "flm", 5, 10, "fml", true)).toBeTruthy();
  });
});
