import css from './footer.module.scss'
//import {useTasks} from "../../hooks/tasks/use-task";

export const Footer = () => {
    //const {getActiveTaskCount, getFinishedTaskCount} = useTasks();

    return (
        <footer className={css.footer}>
            <span >&#169;</span>
              <span >2024</span>
              <span >Denuo</span> 
        </footer>
    )
}







