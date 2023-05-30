using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Data.SqlClient;
using static SMF.Pages.IndexModel;

namespace SMF.Pages.SM
{
    public class RegisterModel : PageModel
    {
        public CustomerInfo customer = new();
        public string errorMessage = "";
        public string successMessage = "";

        public void OnGet()
        {
        }

        public void OnPost()
        {

            customer.name = Request.Form["name"];
            customer.phone = Request.Form["phone"];
            customer.email = Request.Form["email"];
            customer.password = Request.Form["password"];

            if (customer.name.Length == 0 || customer.phone.Length == 0 || customer.email.Length == 0 || customer.password.Length == 0)
            {
                errorMessage = "All Fields Are Required!";
                return;
            }

            try
            {
                string connectionString = "Data Source=CAUSTIC\\CAUSTIC;Initial Catalog=SM;Integrated Security=True";

                using SqlConnection connection = new(connectionString);
                connection.Open();
                string sql = "INSERT INTO customer" + "(name, phone, email, password) VALUES" + "(@name, @phone, @email, @password)";
                using SqlCommand cmd = new(sql, connection);
                cmd.Parameters.AddWithValue("@name", customer.name);
                cmd.Parameters.AddWithValue("@phone", customer.phone);
                cmd.Parameters.AddWithValue("@email", customer.email);
                cmd.Parameters.AddWithValue("@password", customer.password);

                cmd.ExecuteNonQuery();

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                errorMessage = ex.Message;
                return;
            }

            customer.name = "";
            customer.phone = "";
            customer.email = "";
            customer.password = "";
            successMessage = "Created new account succesfully";

            Response.Redirect("/Index");




        }
    }
}
