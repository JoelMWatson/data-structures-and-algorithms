'use strict';

const { AnimalShelter, Animal } = require('./fifo-animal-shelter');
const errorSpy = jest.spyOn(console, 'error');

describe('Testing AnimalShelter Enqueue', () => {
  test('successfully enqueues a dog and cat', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue(new Animal('Dog', 'Barky'));
    shelter.enqueue(new Animal('Cat', 'Scratchy'));
    expect([shelter.front.val.name, shelter.back.val.name]).toEqual([
      'Barky',
      'Scratchy',
    ]);
  });

  test('errors when you enqueue other animal types than dog or cat', () => {
    errorSpy.mockClear();
    const shelter = new AnimalShelter();
    shelter.enqueue(new Animal('Parrot', 'Squaker'));
    expect(errorSpy).toHaveBeenCalled();
  });
});

describe('Testing AnimalShelter Enqueue', () => {
  test('successfully dequeues prefered animal', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue(new Animal('Dog', 'Barky'));
    shelter.enqueue(new Animal('Dog', 'Woofy'));
    shelter.enqueue(new Animal('Dog', 'Whimpery'));
    shelter.enqueue(new Animal('Dog', 'Snarly'));
    shelter.enqueue(new Animal('Cat', 'Scratchy'));
    const cat = shelter.dequeue('Cat');
    expect(cat.name).toBe('Scratchy');
  });

  test('errors when no more of prefered animal are in queue', () => {
    errorSpy.mockClear();
    const shelter = new AnimalShelter();
    shelter.enqueue(new Animal('Dog', 'Barky'));
    shelter.enqueue(new Animal('Dog', 'Woofy'));
    shelter.enqueue(new Animal('Dog', 'Whimpery'));
    shelter.enqueue(new Animal('Dog', 'Snarly'));
    const cat = shelter.dequeue('Cat');
    expect(errorSpy).toHaveBeenCalled();
  });

  test('returns the animal waiting longest when not prefering dog or cat', () => {
    const shelter = new AnimalShelter();
    shelter.enqueue(new Animal('Dog', 'Barky'));
    shelter.enqueue(new Animal('Dog', 'Woofy'));
    shelter.enqueue(new Animal('Dog', 'Whimpery'));
    shelter.enqueue(new Animal('Dog', 'Snarly'));
    shelter.enqueue(new Animal('Cat', 'Scratchy'));
    const dog = shelter.dequeue('Parrot');
    expect(dog.name).toBe('Barky');
  });
});
