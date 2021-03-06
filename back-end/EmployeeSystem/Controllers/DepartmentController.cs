﻿using DTOs.Enums;
using DTOs.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NToastNotify;
using ServiceLayer.ErrorUtils;
using ServiceLayer.Interfaces;
using ServiceLayer.Utils;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace EmployeeSystem.Controllers
{
    [Route("[controller]/[action]")]
    public class DepartmentController : BaseController
    {
        private readonly IDepartmentService service;

        public DepartmentController(IDepartmentService service, IToastNotification toastNotification)
            : base(toastNotification)
        {
            this.service = service;
        }

        [HttpGet]
        public IEnumerable<DepartmentDto> All()
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
        public IActionResult Edit(DepartmentDto model)
        {
            return View("Add", model);
        }

        [HttpPost]
        [Authorize(Roles = "administrator")]
        public IActionResult Save([FromBody] DepartmentDto model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    service.Save(model);
                    return Ok("departments");
                }
                catch (Exception e)
                {
                    return BadRequest(e.Message);
                }
            }

            return BadRequest(string.Join(Environment.NewLine, ModelState.SelectMany(e => e.Value.Errors.Select(er => er.ErrorMessage))));
        }

        [HttpDelete]
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