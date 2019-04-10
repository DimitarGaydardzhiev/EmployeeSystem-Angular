using DTOs.Enums;
using DTOs.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using NToastNotify;
using ServiceLayer.Interfaces;
using ServiceLayer.Utils;
using System;
using System.Collections.Generic;
using System.Linq;

namespace EmployeeSystem.Controllers
{
    //[Authorize]
    [Route("[controller]/[action]")]
    public class PositionController : BaseController
    {
        private readonly IPositionService service;

        public PositionController(IPositionService service, IToastNotification toastNotification)
            : base(toastNotification)
        {
            this.service = service;
        }

        [HttpGet]
        public IEnumerable<PositionDto> All()
        {
            return service.All();
        }

        [HttpGet]
        [Authorize(Roles = "administrator")]
        public IActionResult Add()
        {
            return View();
        }

        [HttpGet]
        [Authorize(Roles = "administrator")]
        public IActionResult Edit(PositionDto model)
        {
            return View("Add", model);
        }

        [HttpGet]
        [Authorize(Roles = "administrator")]
        [Route("{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                var model = service.GetById(id);
                return Ok(model);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Authorize(Roles = "administrator")]
        public IActionResult Save([FromBody] PositionDto model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    service.Save(model);
                    return Ok("positions");
                }
                catch (Exception e)
                {
                    return BadRequest(e.Message);
                }

            }

            return BadRequest(string.Join(Environment.NewLine, ModelState.SelectMany(e => e.Value.Errors.Select(er => er.ErrorMessage))));
        }

        [HttpPost]
        [Authorize(Roles = "administrator")]
        [Route("{id}")]
        public IActionResult Delete(int id)
        {
            if (id == 0)
                return this.BadRequest("Id can not be 0");

            try
            {
                service.Delete(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
