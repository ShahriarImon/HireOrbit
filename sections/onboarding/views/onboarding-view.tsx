import {
  Box,
  Card,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from "@mui/material";

export default function OnboardingView() {
  // const visitService = new APIClient<Visits>(`dashboard/users`, {
  //   cache: "no-store",
  // });

  return (
    <Stack
      direction={"column"}
      spacing={3}
      style={{
        margin: "15px",
        marginTop: "10px",
        marginRight: "115px",
        lineHeight: "1",
      }}
    >
      <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
        <Card
          sx={{
            padding: "0px",
            width: { xs: "95%", md: "66%" },
          }}
        >
          <Box
            sx={{
              padding: "25px",
            }}
          >
            <div
              style={{
                color: "#1C252E",
                fontSize: "1.125rem",
                fontWeight: 600,
              }}
            >
              Create Offer
            </div>
            <div
              style={{
                color: "#637381",
                fontSize: "0.875rem",
                fontWeight: 400,
                marginTop: "10px",
              }}
            >
              Send onboarding offer to new user
            </div>
          </Box>
          <Divider />
          <Box
            sx={{
              padding: "25px",

              width: "100%",
            }}
          >
            <Stack spacing={3}>
              <Stack spacing={1.5}>
                <Box sx={{ fontSize: "0.875rem", fontWeight: 600 }}>
                  Plan Type
                </Box>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  sx={{ paddingLeft: "20px" }}
                >
                  <FormControlLabel
                    value="pay_as_you_go"
                    control={<Radio size="small" />}
                    label="Pay as you go"
                  />
                  <FormControlLabel
                    value="monthly"
                    control={<Radio size="small" />}
                    label="Monthly"
                  />
                  <FormControlLabel
                    value="yearly"
                    control={<Radio size="small" />}
                    label="Yearly"
                  />
                </RadioGroup>
              </Stack>
              <Stack spacing={1.5}>
                <Box sx={{ fontSize: "0.875rem", fontWeight: 600 }}>
                  Additions
                </Box>
                <FormGroup row sx={{ paddingLeft: "20px" }}>
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label="Refundable"
                  />
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label="On demand"
                  />
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label="Negotiable"
                  />
                </FormGroup>
              </Stack>
              <Stack spacing={1.5}>
                <Box sx={{ fontSize: "0.875rem", fontWeight: 600 }}>User</Box>
                <Select
                  // value={age}
                  // onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{ width: "100%" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Stack>
            </Stack>
          </Box>
        </Card>
      </Stack>
    </Stack>
  );
}
