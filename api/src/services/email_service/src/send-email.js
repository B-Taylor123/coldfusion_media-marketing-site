const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
const sendEmail = async (model) => {
    try {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass // generated ethereal password
            }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: `"${ model.firstName } ${ model.lastName }" <${ model.email }>`, // sender address
            to: 'ben@coldfusion.media', // list of receivers
            subject: "Automated Contact Form Enquiry", // Subject line
            html: getHTMLBody(model)
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

        return { success: true };
    } catch (err) {
        console.error('Error sending email:', err);
        return null;
    }
}

const getHTMLBody = (model) => {
    return `
        <div style="width: 100%; text-align: left;">
            <h1> Automated Contact Form Enquiry </h1>

            <br/>

            <div>
                <b> Name: </b>

                <br/>
    
                ${ model.firstName } ${ model.lastName }
            </div>

            <br/>

            <div>
                <b> Email: </b>

                <br/>
    
                ${ model.email }
            </div>

            <br/>

            <div>
                <b> Mobile: </b>

                <br/>
    
                ${ model.mobile }
            </div>

            <br/>

            <div>
                <b> Landline: </b>

                <br/>
    
                ${ model.landline }
            </div>

            <br/>

            <div>
                <b> Company Name: </b>

                <br/>

                ${ model.companyName }
            </div>

            <br/>

            <div>
                <b> Role: </b>

                <br/>
    
                ${ model.role }
            </div>

            <br/>

            <div>
                <b> Company Website: </b>

                <br/>
    
                <a href="${ model.companyWebsite }"> ${ model.companyWebsite } </a>
            </div>

            <br/>

            <div>
                <b> Message: </b>

                <br/>
    
                ${ model.message }
            </div>
        </div>
    `;
};

module.exports = sendEmail;