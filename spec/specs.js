describe('titleCase', function () {
  it("capitalizes the first letter of a single word", function () {
    expect(titleCase("cat")).to.equal("Cat");
  });

  it("capitalizes the first letter of multiple words", function (){
    expect(titleCase("big bad wolf")).to.equal("Big Bad Wolf");
  });

  it("capitalizes first letters of all words except articles- a, an, the, but, with, of, and, or", function(){
    expect(titleCase("old man and the sea")).to.equal("Old Man and the Sea");
  });

  it("capitalizes an article if it's the first word in string", function() {
    expect(titleCase("the old man and the sea")).to.equal("The Old Man and the Sea");
  });
});
