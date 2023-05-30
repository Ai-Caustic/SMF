using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Reflection.Metadata;
using System.Data.SqlClient;

namespace SMF.Pages
{
	public class IndexModel : PageModel
	{
        public List<CustomerInfo> listCustomers = new();
        private readonly ILogger<IndexModel> _logger;

		public IndexModel(ILogger<IndexModel> logger)
		{
			_logger = logger;
		}

		public void OnGet()
        {
			try
			{
                string connectionString = "Data Source=CAUSTIC\\CAUSTIC;Initial Catalog=SM;Integrated Security=True";

                using SqlConnection connection = new(connectionString);
                connection.Open();
                string sql = "SELECT * FROM customer";
                using SqlCommand cmd = new(sql, connection);
                using SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    CustomerInfo customer = new()
                    {
                        id = "" + reader.GetInt32(0),
                        name = reader.GetString(1),
                        phone = reader.GetString(2),
                        email = reader.GetString(3),
                        password = reader.GetString(4),
                    };
                    listCustomers.Add(customer);
                    Console.WriteLine(customer);

                }
            }
			catch (Exception ex)
			{
				Console.WriteLine(ex.Message);	
			}
        }
        public class CustomerInfo
        {
            public string id;
            public string name;
            public string phone;
            public string email;
            public string password;
        }
    }

}