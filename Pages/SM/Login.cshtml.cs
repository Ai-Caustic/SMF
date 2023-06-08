using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Data.SqlClient;

namespace SMF.Pages.SM
{
    public class LoginModel : PageModel
    {
        public void OnGet()
        {
        }

        public bool ValidateLogin(string email, string password)
        {
            string connectionString = "Data Source=CAUSTIC\\CAUSTIC;Initial Catalog=SM;Integrated Security=True";

            using SqlConnection connection = new(connectionString);
            connection.Open();

            string sql = "SELECT password from customer where email = @email";
            using SqlCommand command = new (sql, connection);
            command.Parameters.AddWithValue("@email", email);
            using SqlDataReader reader = command.ExecuteReader();
            if (reader.Read())
            {
                string passwordDB = reader.GetString(3);

                if (VerifyPassword(passwordDB, passwordDB))
                {
                    Console.WriteLine("Login successful");
                    return true;
                }
            }
            else 
            {
                Console.WriteLine("Login failed");
                return false;
            }

            return true;
        }

        private bool VerifyPassword(string password, string passwordDB)
        {
            
            return password == passwordDB;
        }
    }
}
