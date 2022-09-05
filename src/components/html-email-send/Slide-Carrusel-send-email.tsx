import { Button, Paper } from "@mui/material";
import React from "react";

interface SlideCarruselSendEmailProps {
  desc: string;
  resume: string;
}

const SlideCarruselSendEmail: React.FunctionComponent<SlideCarruselSendEmailProps> = ({ desc, resume }) => {
  return (
    <Paper>
      <div className="ctn-email">
        <div className="ctn-about">
          <h6 className="about">QUIENÉS SOMOS</h6>
        </div>
        <div className="ctn-desc-resume">
          <div className="ctn-desc">
            <p className="desc">{desc}</p>
          </div>
          <div className="ctn-resume">
            <p className="resume">{resume}</p>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default SlideCarruselSendEmail;
