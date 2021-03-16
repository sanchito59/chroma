using System.Threading.Tasks;

namespace API.Interfaces
{
  public interface IUnitOfWork
  {
    IUserRepository UserRepository { get; }
    IPaletteRepository PaletteRepository { get; }
    Task<bool> Complete();
    bool HasChanges();
  }
}
