
import Button from "./components/Button"
const App = () => {
  return (
    <div className=" bg-secondary-700 flex content-center">
      <div className=" p-2 ps-5">
        <p className=" text-primary-600 font-semibold font-['NunitoSans'] text-body-text-1 italic "> Lets Talk</p>
        <p className=" text-secondary-100 font-bold text-body-text-1"> Contact Us</p>
      </div>
      <div>
        <Button></Button>
      </div>
    </div>
  )
}

export default App