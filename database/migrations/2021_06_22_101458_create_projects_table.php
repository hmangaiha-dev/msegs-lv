<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('date')->nullable();

            $table->text('subtitle');
            $table->text('contents');    

            $table->string('bannername')->nullable();
            $table->string('bannerpath')->nullable(); 

            $table->string('imagename')->nullable();
            $table->string('imagepath')->nullable(); 
           
        $table->text('client')->nullable();    
        $table->text('hostedat')->nullable();    
        $table->text('developedby')->nullable();    
        $table->text('goals')->nullable();    



            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
}
