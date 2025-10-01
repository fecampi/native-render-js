
export type Direction = 'left' | 'right' | 'up' | 'down';

export const focusTreeService = {

  setup(rootLayout: any) {
    console.log('setup recebeu:', rootLayout);
  },

  enableFocusNavigation() {
    console.log('enableFocusNavigation foi chamado');
  }

};
