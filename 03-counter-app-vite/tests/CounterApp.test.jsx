const { render, screen, fireEvent } = require("@testing-library/react")
const { CounterApp } = require("../src/CounterApp")

describe('Pruebas en CounterApp', () => { 

    const initialValue = 10

    test('debe hacer mach con el snapshot', () => { 
    
        const { container } = render( <CounterApp value={initialValue}/> )
        expect( container ).toMatchSnapshot()

     })

    test('debe mostrar el valor inicial 100', () => { 
        
        render(<CounterApp value={100}/>)
        expect( screen.getByText(100)).toBeTruthy()

    })

    test('debe incrementar con el botón +1', () => { 
      
      render(<CounterApp value={initialValue}/>)
      fireEvent.click( screen.getByText('+1') )
      expect( screen.getByText('11') ).toBeTruthy()

    })

    test('debe decrementar con el botón -1', () => { 
    
      render(<CounterApp value={initialValue}/>)
      fireEvent.click( screen.getByText('-1') )
      expect( screen.getByText('9') ).toBeTruthy()

    })

    test('debe funcionar el valor reset', () => {

      render(<CounterApp value={initialValue}/>)
      fireEvent.click( screen.getByText('+1') )
      fireEvent.click( screen.getByText('+1') )
      fireEvent.click( screen.getByText('+1') )

      fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))

      // screen.debug()
      expect( screen.getByText( initialValue ) )



    })
 })