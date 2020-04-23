import connect from '@base/redux/connect'
import ICON from '../icon'

class BackArrow extends ICON {
    config(){
        return {
            viewBox:'0 0 459 459'
        }
    }
    path(){
        return `<path d="M178.5,140.25v-102L0,216.75l178.5,178.5V290.7c127.5,0,216.75,40.8,280.5,130.05C433.5,293.25,357,165.75,178.5,140.25z"/>`
    }
    
}
export default connect(BackArrow)