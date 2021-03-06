﻿
using IdentityServer4.EntityFramework.Entities;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using System.Linq;

namespace  DonateTo.IdentityServer.Services
{
    public interface IClientService
    {
        /// <summary>
        /// Creates a new client
        /// </summary>
        /// <param name="client">Contains the data to create the new wetity</param>
        /// <returns>The created client</returns>
        Task<Client> CreateAsync(Client client);

        /// <summary>
        /// Method that deletes the specified entity
        /// </summary>
        /// <param name="id">Id of the client to removeparam>
        /// <returns>The requested client</returns>
        Task DeleteAsync(int id);

        /// <summary>
        /// Gets a list of clients based on the filter conditions
        /// </summary>
        /// <param name="filter">Represents the function to filter the clients</param>
        /// <returns>A list of filtered clients</returns>
        Task<IEnumerable<Client>> GetAsync(Expression<Func<Client, bool>> filter);

        /// <summary>
        /// Gets a specific client by id
        /// </summary>
        /// <param name="id">Id of the client to retrieve</param>
        /// <returns>A list of clients</returns>
        Task<Client> GetAsync(int id);
        /// <summary>
        /// Updates a client
        /// </summary>
        /// <param name="client">Updated client data</param>
        /// <param name="id">Id of the client to update</param>
        /// <returns>The updated client</returns>
        Task<Client> UpdateAsync(Client client, int id);
       
    }
}
