using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
        public IEnumerable<Evento> _evento = new Evento[] {
                new Evento  {
                    EventoId = 1,
                    Local = "São Paulo",
                    DataEvento = DateTime.Now.AddDays(1).ToString("dd/MM/yyyy"),
                    Tema = "Angular 11 e .NET 5",
                    QtdPessoas = 250,
                    Lote = "1º lOTE",
                    ImagemURL = "foto.png"
                },
                new Evento  {
                    EventoId = 2,
                    Local = "Bahia",
                    DataEvento = DateTime.Now.AddDays(2).ToString("dd/MM/yyyy"),
                    Tema = "Angular Material",
                    QtdPessoas = 150,
                    Lote = "2º lOTE",
                    ImagemURL = "foto.png"
                }
            };
        public EventoController()
        {
        }

        [HttpGet] 
        public IEnumerable<Evento> Get()
        {
            // uma rota que retorna todos os eventos acima
            return _evento;
        }
        [HttpGet("{id}")]
        public IEnumerable<Evento> GetById(int id)
        {
            // uma rota que retorna filtrando o id
            return _evento.Where(evento => evento.EventoId == id);
        }
        [HttpPost]
        public string Post()
        {
            return "Exemplo de Post";
        }
        [HttpPut("{id}")]
        public string Put(int id)
        {
            return $"Exemplo de Put com id = {id}";
        }
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return $"Exemplo de Delete com id = {id}";
        }
    }
}
