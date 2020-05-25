import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { getData, _baseApiURL } from "../../service/service";
import { capitalize } from "../helpers";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Filter({ showPokemonByType }) {
  const classes = useStyles();
  const [type, setType] = useState("");
  const [pokemonTypes, setPokemonTypes] = React.useState([]);

  useEffect(() => {
    const getTypes = async () => {
      let response = await getData(`${_baseApiURL}/type/`);
      setPokemonTypes(response.results);
    };
    getTypes();
  }, []);

  const handleChange = (event) => {
    setType(event.target.value);
    showPokemonByType(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Filter by types</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          onChange={handleChange}
        >
          {pokemonTypes.map(({ name }, idx) => (
            <MenuItem key={idx} value={name}>
              {capitalize(name)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
