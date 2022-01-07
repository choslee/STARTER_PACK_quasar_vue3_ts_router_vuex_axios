export interface GlobalStateInterface {
  leftDrawerOpen: boolean;
}

function state (): GlobalStateInterface {
  return {
    leftDrawerOpen: false
  }
}

export default state
