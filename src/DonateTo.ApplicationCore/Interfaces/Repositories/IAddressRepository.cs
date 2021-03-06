﻿using DonateTo.ApplicationCore.Entities;
using System.Threading.Tasks;

namespace DonateTo.ApplicationCore.Interfaces.Repositories
{
    public interface IAddressRepository: IRepository<Address>
    {
        Task SoftDeleteAddress(long addressId);
    }
}
