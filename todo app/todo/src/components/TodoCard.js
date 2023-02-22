import Accordion from "@mui/material/Accordion";
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';

const TodoCard = ({title,description, id}) => {
  return  <Accordion >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls={id}
      id={id}
    >
      <Typography>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        {description}
      </Typography>
    </AccordionDetails>
  </Accordion>
};
export default TodoCard;
