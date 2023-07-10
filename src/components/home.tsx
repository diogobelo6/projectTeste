import Typography from '@mui/material/Typography';
import { Box, Grid, Button} from '@mui/material';
import { Banner } from './banner';
import { CoinList } from '../contexts/config';
import CoinsTable from './coinsTable';



export const HomePage=()=>{
    return(<>
      <Banner/>
      <CoinsTable/>
      </>
    )
}