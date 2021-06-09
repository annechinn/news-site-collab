describe('test', ()=>{
  it('test1', ()=>{
    let numbers = [1, 3, 5, 4, 6, 2];
    const result = compareNumbers(numbers, 4);
    expect(result.length).toBe(6);
    expect(result[0]).toBe('lt');
    expect(result[1]).toBe('lt');
    expect(result[2]).toBe('gt');
    expect(result[3]).toBe('eq');
    expect(result[4]).toBe('gt');
    expect(result[5]).toBe('lt');
  })

  it('test2', ()=>{
    let numbers = [10, 2, 6];
    const result = compareNumbers(numbers, 4);
    expect(result.length).toBe(3);
    expect(result[0]).toBe('gt');
    expect(result[1]).toBe('lt');
    expect(result[2]).toBe('gt');
  })

  it('test3', ()=>{
    let numbers = [];
    const result = compareNumbers(numbers, 4);
    expect(result.length).toBe(0);
  })
})