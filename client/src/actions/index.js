export const MOVE_OBJECTS = 'MOVE_OBJECTS';
export const ON_COLLIDE = 'ON_COLLIDE';
export const START_GAME = 'START_GAME';

export const moveObjects = mousePosition => ({
  type: MOVE_OBJECTS,
  mousePosition,
});

export const onCollide = mousePosition => ({
  type: ON_COLLIDE,
  mousePosition,
});

export const startGame = () => ({
  type: START_GAME,
});