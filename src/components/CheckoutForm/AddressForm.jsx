import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { commerce } from "../../lib/commerce";

import FormInput from "./FormInput";

const AddressForm = ({ checkoutToken }) => {
  console.log(checkoutToken.id);
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shipppingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const methods = useForm();
  const fetchShippingCountries = async (checkoutTokenId) => {
    try {
      const { countries } = await commerce.services.localeListShippingCountries(
        checkoutTokenId
      );
      console.log(countries);
      setShippingCountries(countries);
    } catch (error) {
      console.log(" fetch countries error is ", error);
    }
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  return (
    <>
      <Typography variant="h6" gutterBottom="">
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form>
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="address1" label="Address" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="City" label="City" />
            <FormInput required name="ZIP" label="Zip / Postal code" />
            {/* <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
                <Select value={} fullWidth onChange={}>
                  <MenuItem key={} value={}>Select Me</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
                <Select value={} fullWidth onChange={}>
                  <MenuItem key={} value={}>Select Me</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
                <Select value={} fullWidth onChange={}>
                  <MenuItem key={} value={}>Select Me</MenuItem>
                </Select>
            </Grid> */}
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
