function GetPrint()
{
	window.print();
}


//Add New Row
function BtnAdd()
{
	var v = $("#TRow").clone().appendTo("#TBody");
	$(v).find("input").val('');
	$(v).removeClass("d-none");

	//Add new now number manage
	$(v).find("th").first().html($('#TBody tr').length - 1);
}


//Delete Row
function BtnDelete(v)
{
	$(v).parent().parent().remove();
	GetTotal();

	//manage delete row numbers
	$("#TBody").find("tr").each(
		function(index)
		{
			$(this).find("th").first().html(index);
		}

		);
}

//Calvulation

function Calc(v)
{
	var index = $(v).parent().parent().index();

	var qty = document.getElementsByName("qty")[index].value;
	var rate = document.getElementsByName("rate")[index].value;

	var amt = qty * rate;
	document.getElementsByName("amt")[index].value = amt;

	GetTotal();
}


function GetTotal()
{
	var sum=0;
	var amts = document.getElementsByName("amt");

	//All Amount Total
	for(let index=0; index < amts.length; index++)
	{
		var amt = amts[index].value;
		sum = +(sum) + +(amt);
	}

	//All Amount Total Display
	document.getElementById("FTotal").value = sum;


	//GST Calculate
	gst = sum * 0.18;
	document.getElementById("FGST").value = gst;

	//Total Amount
	fnet = +(sum) + +(gst);
	document.getElementById("FNet").value = fnet;




}



// Function to get the current invoice number
        function getCurrentInvoiceNumber() {
            // In a real application, you would fetch the current invoice number from a server or a database.
            // For this example, we'll use localStorage to store and increment the invoice number.
            let invoiceNumber = localStorage.getItem('invoiceNumber') || 1;
            return parseInt(invoiceNumber);
        }

        // Function to increase the invoice number by 1 and update the input field
        function increaseInvoiceNumber() {
            let currentInvoiceNumber = getCurrentInvoiceNumber();
            const invoiceNumberInput = document.getElementById('invoiceNumberInput');
            
            // Update the input field with the new invoice number
            invoiceNumberInput.value = currentInvoiceNumber;

            // Increment and save the new invoice number
            currentInvoiceNumber++;
            localStorage.setItem('invoiceNumber', currentInvoiceNumber);
        }

        // Set the initial invoice number on page load
        document.addEventListener('DOMContentLoaded', function() {
            increaseInvoiceNumber();
        });


        


 // Get the current day in short form (e.g., "Sun")
        function getCurrentDay() {
            const now = new Date();
            const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            return days[now.getDay()];
        }

        // Get the current date in custom format (e.g., "24: July : 2023")
        function getCurrentDateWithCustomFormat() {
            const now = new Date();
            const date = String(now.getDate()).padStart(2, '0');
            const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const month = monthNames[now.getMonth()];
            const year = now.getFullYear();

            return `${date}/${month}/${year}`;
        }

        // Set the input field's value to the current day and date with custom format
        document.addEventListener('DOMContentLoaded', function() {
            const currentDateInput = document.getElementById('currentDateInput');
            const currentDay = getCurrentDay();
            const currentDate = getCurrentDateWithCustomFormat();
            currentDateInput.value = `${currentDay} ${currentDate}`;
        });


  // Get the current time in 12-hour format (AM/PM)
        function getCurrentTime() {
            const now = new Date();
            let hours = now.getHours();
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';

            // Convert to 12-hour format
            hours = hours % 12 || 12;

            return `${hours}:${minutes} ${ampm}`;
        }

        // Set the input field's value to the current time
        document.addEventListener('DOMContentLoaded', function() {
            const currentTimeInput = document.getElementById('currentTimeInput');
            currentTimeInput.value = getCurrentTime();
        });