package com.kg.ajaxservlet.controller;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.kg.ajaxservlet.model.Country;

/**
 * Helloservlet
 */@WebServlet("/hello")
public class Helloservlet extends HttpServlet{
    ArrayList<Country> countryList = new ArrayList<Country>();
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
       // super.doGet(req, resp);
       System.out.println("do get called");
       String query = "SELECT * from country";
       try {
           
           List<Object> list = MysqlConnect.getDbCon().resultSetToArrayList(query);
           List<Country> countryList = (List<Country>)(List<?>)list;
           
           String countryJsonString = new Gson().toJson(countryList);
           System.out.println(countryJsonString);

           resp.setContentType("application/json");
           resp.setCharacterEncoding("UTF-8");
           resp.getWriter().write(countryJsonString);

       } catch (SQLException e) {
           e.printStackTrace();
       }
    }
    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
       // super.doDelete(req, resp);
    System.out.println("do delete called");
    }
@Override
protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    // 
    System.out.println("do post called");
}
    
}