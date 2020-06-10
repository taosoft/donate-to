﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace DonateTo.Infrastructure.Migrations
{
    public partial class AddUnitToRequestItem : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DonationItem_Unit_UnitId",
                table: "DonationItem");

            migrationBuilder.DropColumn(
                name: "Unit",
                table: "DonationRequestItem");

            migrationBuilder.AddColumn<long>(
                name: "UnitId",
                table: "DonationRequestItem",
                nullable: false,
                defaultValue: 1L);

            migrationBuilder.AlterColumn<long>(
                name: "UnitId",
                table: "DonationItem",
                nullable: false,
                oldClrType: typeof(long),
                oldType: "bigint",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_DonationRequestItem_UnitId",
                table: "DonationRequestItem",
                column: "UnitId");

            migrationBuilder.AddForeignKey(
                name: "FK_DonationItem_Unit_UnitId",
                table: "DonationItem",
                column: "UnitId",
                principalTable: "Unit",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_DonationRequestItem_Unit_UnitId",
                table: "DonationRequestItem",
                column: "UnitId",
                principalTable: "Unit",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DonationItem_Unit_UnitId",
                table: "DonationItem");

            migrationBuilder.DropForeignKey(
                name: "FK_DonationRequestItem_Unit_UnitId",
                table: "DonationRequestItem");

            migrationBuilder.DropIndex(
                name: "IX_DonationRequestItem_UnitId",
                table: "DonationRequestItem");

            migrationBuilder.DropColumn(
                name: "UnitId",
                table: "DonationRequestItem");

            migrationBuilder.AddColumn<string>(
                name: "Unit",
                table: "DonationRequestItem",
                type: "text",
                nullable: true);

            migrationBuilder.AlterColumn<long>(
                name: "UnitId",
                table: "DonationItem",
                type: "bigint",
                nullable: true,
                oldClrType: typeof(long));

            migrationBuilder.AddForeignKey(
                name: "FK_DonationItem_Unit_UnitId",
                table: "DonationItem",
                column: "UnitId",
                principalTable: "Unit",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
