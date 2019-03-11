describe('ready (event)', () => {
  it('should trigger the `ready` event', (done) => {
    const image = window.createImage();

    image.__zone_symbol__addEventListener('ready', (event) => {
      expect(event.type).to.equal('ready');
      done();
    });

    new Cropper(image);
  });

  it('should trigger the `crop` event even though default prevented', (done) => {
    const image = window.createImage();

    image.__zone_symbol__addEventListener('ready', (event) => {
      event.preventDefault();
    });

    image.__zone_symbol__addEventListener('crop', () => {
      done();
    });

    new Cropper(image);
  });
});
