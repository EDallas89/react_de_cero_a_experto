const { render, screen } = require("@testing-library/react")
const { FirstApp } = require("../src/FirstApp")

describe('Pruebas en FirstApp', () => { 
    
    const title = 'Hola, soy Goku'
    const subTitle = 'Soy un subtitulo'

    test('debe hacer macth con el snapshot', () => { 
        
        const { container } = render( < FirstApp title={title}/> )
        expect( container ).toMatchSnapshot()
    })

    test('debe de mostrar el mensaje "Hola, soy Goku"', () => { 

        // screen.debug()
        render( <FirstApp title={ title }/> )
        expect( screen.getByText(title) ).toBeTruthy()
     })

    test('debe mostrar el título en un h1', () => { 
       
        render( <FirstApp title={ title }/> )
        expect( screen.getByRole('heading', { level:1 }).innerHTML ).toContain( title )
     })

    test('debe de mostrar el subtitulo enviado por props', () => { 
       
        render( 
            <FirstApp 
                title={ title } 
                subTitle={subTitle}
            /> 
        )
        expect( screen.getAllByText(subTitle).length ).toBe(2)
    })
 })