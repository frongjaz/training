import React, { useState } from "react";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function Multiple() {
  const [claimNumber, setClaimNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [sender, setSender] = useState("");
  const [department, setDepartment] = useState("");
  const [jobType, setJobType] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission
  };

  return (
    
    <form onSubmit={handleSubmit}>
        <br/>
      <Grid container spacing={3}>
        <Grid item xs={4}>
        <TextField
  id="claimNumber"
  label="เลขเคลม"
 
  fullWidth
  value="LACxx-xx-xxxx" 
  disabled 
/>
        </Grid>
        <Grid item xs={4}>
          <DatePicker
            label="วันที่"
            value={selectedDate}
            onChange={(newDate) => setSelectedDate(newDate)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="sender"
            label="ผู้ส่งงาน"
            variant="outlined"
            fullWidth
            value={sender}
            onChange={(e) => setSender(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>สังกัด</InputLabel>
            <Select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              label="สังกัด"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="สังกัด 1">สังกัด 1</MenuItem>
              <MenuItem value="สังกัด 2">สังกัด 2</MenuItem>
             
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="jobType"
            label="ประเภทงาน"
            variant="outlined"
            fullWidth
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="company"
            label="บริษัท"
            variant="outlined"
            fullWidth
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            id="details"
            label="รายละเอียด"
            variant="outlined"
            multiline
            rows={3}
            fullWidth
           />
        </Grid>

        <Grid item xs={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>ประเภทสัญญา</InputLabel>
            <Select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              label="สังกัด"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="สังกัด 1">สังกัด 1</MenuItem>
              <MenuItem value="สังกัด 2">สังกัด 2</MenuItem>
             
            </Select>
          </FormControl>
          
        </Grid>
        <Grid item xs={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>ผู้รับงาน</InputLabel>
            <Select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              label="สังกัด"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="สังกัด 1">สังกัด 1</MenuItem>
              <MenuItem value="สังกัด 2">สังกัด 2</MenuItem>
             
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>ผู้รับผิดชอบ</InputLabel>
            <Select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              label="สังกัด"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="สังกัด 1">สังกัด 1</MenuItem>
              <MenuItem value="สังกัด 2">สังกัด 2</MenuItem>
             
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>อยู่ในขั้นตอน</InputLabel>
            <Select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              label="สังกัด"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="สังกัด 1">สังกัด 1</MenuItem>
              <MenuItem value="สังกัด 2">สังกัด 2</MenuItem>
             
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <DatePicker
            label="วันที่"
            value={selectedDate}
            onChange={(newDate) => setSelectedDate(newDate)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>ผู้ดำเนินการเรียบร้อยแล้ว</InputLabel>
            <Select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              label="สังกัด"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="สังกัด 1">สังกัด 1</MenuItem>
              <MenuItem value="สังกัด 2">สังกัด 2</MenuItem>
             
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <DatePicker
            label="วันที่"
            value={selectedDate}
            onChange={(newDate) => setSelectedDate(newDate)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </Grid>
        <Grid item xs={4}>
          <DatePicker
            label="วันที่"
            value={selectedDate}
            onChange={(newDate) => setSelectedDate(newDate)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="claimNumber"
            label="SaleID"
            variant="outlined"
            fullWidth
            value={claimNumber}
            onChange={(e) => setClaimNumber(e.target.value)}
          />
        </Grid>
        
      </Grid>
    </form>
  );
}
