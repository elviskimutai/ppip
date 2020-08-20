module.exports = ({
    ApplicationNo,
    ApplicantName,
    PEName,
    ApplicationDate,
    PENotificationDate,
    HearingDateAndTime,
    Venue,
    Noticedate,
    LogoPath
}) => {
    return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>PDF Result Template</title>
    <style>
    .logo{
      height: 130px; 
      width: 170px;
    }
      .img-container {
        text-align: center;
        display: block;
      }
      .headings {
        text-align: center;
      }
      .Container {
        width: 80%;
        margin: 0 auto;
      }
      .Footer{
          text-align: right; 
      }
      .dotted{
        border-bottom: 1px dashed #000000;
        text-decoration: none; 
}
    </style>
  </head>
  <body>
    <div class="Container"> 
 <span class="img-container">
    <img class="logo" src=${LogoPath} alt="">
    </span>
    
      <h2 class="headings">REPUBLIC OF KENYA</h2>
      <H3 class="headings">PUBLIC PROCUREMENT ADMINISTRATIVE REVIEW BOARD</H3>
      <H3 class="headings">REQUEST NO ${ApplicationNo}</H3>
      <H3 class="headings"> BETWEEN</H3>
      <H4 class="headings"> <span class="dotted">${ApplicantName}</span> APPLICANT</H4>
      <H3 class="headings"> AND</H3>
      <H4 class="headings">
        <span class="dotted">${PEName}</span> RESPONDENT (<i>Procuring Entity or Director General</i>)</H4
      >
      <h3>TO:</h3>
      <ol>
        <li>${PEName} (<i>Procuring Entity or Director General</i>)</li>
        <li>${ApplicantName} (<i>Applicant</i>)</li>
      </ol>
      <H3 class="headings"> HEARING NOTICE</H3>
      <P
        >Whereas <span class="dotted">${ApplicantName} </span> the applicant herein has instituted a complaint
        against <span class="dotted">${PEName} </span> (<i>Procuring Entity or Director General</i>) on
        <span class="dotted">${ApplicationDate} </span>(Date) particulars of which were set out in a Request for Review
        served upon you on <span class="dotted">${PENotificationDate} </span>.
      </P>
      <p>You are hereby required to appear on the <span class="dotted">${HearingDateAndTime} </span>. when the complaint against 
          you will be heard by this Board sitting at <b class="dotted">${Venue} </b>.</p>
          <p>If you fail to appear,the Applicant may proceed with the complaint and determination by order of
               the Board may be made in your absence.
              <p>Dated on ${Noticedate}.</p>
              
          </p>
        <br>
       
        <h3 class="Footer">Board Secretary</h3>

    </div>
   </body>
</html>
`;
};
