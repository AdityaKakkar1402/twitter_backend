import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const SECRETORKEY = process.env.SECRETORKEY;
export { PORT, SECRETORKEY };
