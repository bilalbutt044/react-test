import renderer from 'react-test-renderer';
import Product from "./../index"

it("render Product component  without error", () => {
    const component = renderer.create(<Product />).toJSON()
    expect(component).toMatchSnapshot() 
})

